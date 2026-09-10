// js/pages/contact-us.js — page-unique behavior for contact-us.html.
// The live site switches the Address/Call Us/Queries tabs on mouseenter (sticky — hovering away
// doesn't revert). Reuses the Bootstrap Tab instance already wired via data-bs-toggle="tab", so
// click keeps working for keyboard/touch users; hover just fires the same .show() call.

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#contactTab .nav-link").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      bootstrap.Tab.getOrCreateInstance(btn).show();
    });
  });
});
