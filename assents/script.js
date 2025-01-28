// Redirecionar para o Stripe para pagamento
function redirectToStripe() {
    const stripeCheckoutURL = "https://buy.stripe.com/cN2bLr3UW6q57zabII"; // Substitua pelo link correto
    window.location.href = stripeCheckoutURL;
}
