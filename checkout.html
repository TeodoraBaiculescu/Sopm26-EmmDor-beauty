
form.addEventListener("submit", async event => {
  event.preventDefault();

  if (!validatePhone()) {
    phoneInput.reportValidity();
    phoneInput.focus();
    return;
  }

  message.textContent = "";

  const cart = getCart();

  if (!cart.length) {
    message.textContent = "Coșul este gol.";
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  data.cart = cart;

  // Trimitem prefixul și numărul împreună.
  data.phone = `${data.phoneCountry}${data.phone.replace(/\D/g, "")}`;

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = "Se trimite comanda...";

  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Comanda nu a putut fi salvată.");
    }

    localStorage.removeItem("emmdor_cart");
    message.textContent =
      `Comanda a fost înregistrată! Număr comandă: ${result.orderId}`;

    renderSummary();
    form.reset();
  } catch (error) {
    message.textContent =
      error.message || "Nu am putut contacta serverul.";
  } finally {
    button.disabled = false;
    button.textContent = "TRIMITE COMANDA";
  }
});
