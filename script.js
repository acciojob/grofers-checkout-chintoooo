<script>
  function calculateTotal() {
    const priceCells = document.querySelectorAll(".prices");
    let total = 0;

    priceCells.forEach(cell => {
      total += parseFloat(cell.textContent);
    });

    // Create a new row and cell
    const table = document.getElementById("groceryTable");
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    totalCell.colSpan = 2; // Spans across both columns
    totalCell.textContent = "Total Price: " + total;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  }
</script>
