/* -------------------------
   SELECT ELEMENTS FROM THE DOM
-------------------------- */

const inputElement = document.querySelector("#favchap");
// Find the text input field where the user types a chapter
// Example: Alma 5

const buttonElement = document.querySelector("button");
// Find the Add Chapter button

const listElement = document.querySelector("#list");
// Find the unordered list (<ul>)
// New chapter entries will be added here


/* -------------------------
   LISTEN FOR BUTTON CLICKS
-------------------------- */

buttonElement.addEventListener("click", function () {
   // This code runs every time the Add Chapter button is clicked


   /* -------------------------
      CHECK FOR VALID INPUT
   -------------------------- */

   if (inputElement.value.trim() !== "") {
      // Make sure the input box is not empty
      // trim() removes spaces before and after text
      // Prevents entries that contain only blank spaces


      /* -------------------------
         CREATE NEW ELEMENTS
      -------------------------- */

      const li = document.createElement("li");
      // Create a new list item (<li>)
      // This will hold the chapter name and delete button

      li.textContent = inputElement.value;
      // Put the user's typed chapter into the list item
      // Example:
      // <li>Alma 5</li>


      const deleteBtn = document.createElement("button");
      // Create a delete button for this list item


      /* -------------------------
         CUSTOMIZE DELETE BUTTON
      -------------------------- */

      deleteBtn.textContent = "❌";
      // Put an X symbol on the delete button

      deleteBtn.setAttribute(
         "aria-label",
         `Remove ${inputElement.value}`
      );
      // Add a label for screen readers
      // A screen reader may announce:
      // "Remove Alma 5"


      /* -------------------------
         DELETE BUTTON EVENT
      -------------------------- */

      deleteBtn.addEventListener("click", function () {
         // This code runs when THIS delete button is clicked

         listElement.removeChild(li);
         // Remove this specific list item from the list

         inputElement.focus();
         // Put the cursor back into the input field
      });


      /* -------------------------
         BUILD THE HTML STRUCTURE
      -------------------------- */

      li.appendChild(deleteBtn);
      // Place the delete button inside the list item
      //
      // Result:
      //
      // <li>
      //   Alma 5 ❌
      // </li>

      listElement.appendChild(li);
      // Add the completed list item into the unordered list


      /* -------------------------
         CLEAN UP INPUT BOX
      -------------------------- */

      inputElement.value = "";
      // Clear the input field after adding a chapter
   }


   /* -------------------------
      RETURN CURSOR TO INPUT
   -------------------------- */

   inputElement.focus();
   // Put the cursor back in the text box
   // User can immediately type another chapter
});