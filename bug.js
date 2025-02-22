```javascript
// ... your Tailwind CSS classes ...
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <!-- Content -->
</div>
```

This code uses Tailwind's gradient feature to create a background. If you encounter unexpected behavior or no gradient at all, ensure you've configured Tailwind correctly.

**Possible Issues:**

* **Missing or Incorrect Configuration:** Double-check your `tailwind.config.js` file to make sure the `theme` section is correctly configured to include gradients, and that Tailwind is properly configured for your project.
* **Incorrect Gradient Syntax:** Verify that you've used the gradient syntax correctly.  There might be a typo in `from-blue-500` or `to-purple-500`. Use the Tailwind CSS documentation to verify the correct color names and syntax.
* **CSS Specificity Issues:** Other CSS rules might override the Tailwind styles with higher specificity.  Use the browser's developer tools to inspect the element and see what CSS rules are applied.
* **Missing or Incorrect `@tailwind` directives in your CSS file:**  If you're not using the `@apply` directive, ensure that you have the correct `@tailwind` directives in your CSS file to ensure Tailwind's styles are applied correctly.