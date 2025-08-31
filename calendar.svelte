<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</svelte:head>
<script>

</script>
<div class="container">
	{#each ((year) => {
    return Array.from({ length: 12 }, (_, i) => {
        return Array.from({ 
            length:  new Date(new Date(year, i + 1, 1).getTime() - 1).getDate()
        }, (_, j) => j + 1)
    });
})(2025) as daysInAMonth, i}
		<div class="row">
	    <div class="col" style="border: 1px solid rgba(39, 41, 43, 0.1); margin-bottom: 10px">
			{new Date(2025, i).toLocaleString('default', { month: 'long' })}<br>
			{#each daysInAMonth as day, j}
				 <div class="row">
	        <div class="col" style="border-top: 1px solid rgba(39, 41, 43, 0.1); {i == new Date().getMonth() && day == new Date().getDate() ? "color: red": ""}">
						{day}
	        </div>
	      </div>
			{/each}
		   </div>
	  </div>
	{/each}
</div>
