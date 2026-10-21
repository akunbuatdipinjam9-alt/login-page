const form = document.querySelector('#loginForm');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const notice = document.querySelector('#notice');
function inform(message, success = false) {
  notice.textContent = message;
  notice.classList.toggle('success', success);
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!email.validity.valid) { inform('Please enter a valid email address.'); email.focus(); return; }
  if (password.value.length < 6) { inform('Password must be at least 6 characters.'); password.focus(); return; }
  inform('Demo sign-in successful. No account data was sent or stored.', true);
});
document.querySelector('#togglePassword').addEventListener('click', event => {
  const visible = password.type === 'password';
  password.type = visible ? 'text' : 'password';
  event.currentTarget.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
  event.currentTarget.setAttribute('aria-pressed', String(visible));
});
document.querySelector('#googleBtn').addEventListener('click', () => inform('Google sign-in is a visual demo. No Google account is connected.'));
document.querySelector('#forgot').addEventListener('click', event => { event.preventDefault(); inform('Password reset is not connected in this demo.'); });
document.querySelector('#register').addEventListener('click', event => { event.preventDefault(); inform('Account registration is not connected in this demo.'); });
