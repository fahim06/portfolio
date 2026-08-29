import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ContactForm from "./ContactForm.jsx";

function fill(label, value) {
  fireEvent.change(screen.getByLabelText(label), {
    target: { value },
  });
}

function submit() {
  fireEvent.click(screen.getByRole("button", { name: /send message/i }));
}

describe("ContactForm", () => {
  it("announces validation errors and links them to inputs", () => {
    render(<ContactForm />);
    submit();

    const alerts = screen.getAllByRole("alert");
    expect(alerts.length).toBe(3);

    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput.getAttribute("aria-invalid")).toBe("true");
    expect(nameInput.getAttribute("aria-describedby")).toBe("name-error");
    expect(document.getElementById("name-error")?.textContent).toContain("Please enter your name");
  });

  it("submits valid input and shows the success state", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: "Email sent successfully!" }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);
    fill(/name/i, "Ada Lovelace");
    fill(/email/i, "ada@example.com");
    fill(/message/i, "Hello, this is a long enough message.");
    submit();

    await waitFor(() => {
      expect(screen.getByText(/email sent successfully/i)).toBeTruthy();
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST" }),
    );
    // Form resets after success.
    expect(screen.getByLabelText(/name/i).value).toBe("");

    vi.unstubAllGlobals();
  });

  it("shows the server error and preserves input on failure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({ error: "Failed to send email." }),
      }),
    );

    render(<ContactForm />);
    fill(/name/i, "Ada Lovelace");
    fill(/email/i, "ada@example.com");
    fill(/message/i, "Hello, this is a long enough message.");
    submit();

    await waitFor(() => {
      expect(screen.getByText(/failed to send email/i)).toBeTruthy();
    });
    // Entered data is preserved so the user can retry.
    expect(screen.getByLabelText(/name/i).value).toBe("Ada Lovelace");

    vi.unstubAllGlobals();
  });
});
