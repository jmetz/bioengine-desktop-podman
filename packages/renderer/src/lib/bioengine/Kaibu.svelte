<script lang="ts">
  let sites=[
    {
      "name": "Kaibu",
      "url": "https://kaibu.org/"
    },
    {
      "name": "Model Zoo",
      "url": "https://bioimage.io/"
    },
    {
      "name": "Imjoy-Lite",
      "url": "https://imjoy.io/lite"
    },
    {
      "name": "VtkItk Viewer",
      "url": "https://kitware.github.io/itk-vtk-viewer/app/?fileToLoad=https://data.kitware.com/api/v1/file/564a65d58d777f7522dbfb61/download/data.nrrd"
    }];
    let site = sites[0].url;
    let text_url = site;
</script>
<style>
div.iframe-container{
    display:flex;
    width:100%;
    /*height:100%;*/
    height:fit-content;
    flex-direction:both;
}

iframe{
    flex-grow:2;
    border:none;
    height:80vh;
    margin:0;
    padding:0;
}

</style>
  <input bind:value={text_url} /><button on:click={() => {site=text_url;}}>Set</button>

	<select
		bind:value={site}
	>
		{#each sites as site}
			<option value={site.url}>
				{site.name}
			</option>
		{/each}
	</select>

<div style="display=flex;width=100%;height=100%;flex-direction=column;background-color=blue;overflow=hidden;"  class="iframe-container">
  <iframe title="BioEngine" style="flex-grow=1;border=none;margin=0;padding=0;" src="{site}"></iframe>
</div>
