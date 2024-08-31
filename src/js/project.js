// Récupérer l'ID du projet à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Charger les données du projet depuis un fichier JSON
fetch("./src/data/projets.json")
	.then((response) => response.json())
	.then((data) => {
		// Trouver le projet correspondant à l'ID
		const projectData = data.projects.find(
			(project) => project.id == projectId
		);

		if (projectData) {
			// Mettre à jour les éléments de la page avec les données du projet
			document.getElementById(
				"page-title"
			).textContent = `${projectData.title} - Projet`;
			document.getElementById("project-title").textContent =
				projectData.title;
			document.getElementById("project-description").textContent =
				projectData.clientDescription;
			document.getElementById(
				"project-description-developer"
			).textContent = projectData.developerDescription;
			document.getElementById(
				"project-description-designer"
			).textContent = projectData.designerDescription;
			document.getElementById("project-image").src = projectData.image;
			document.getElementById("project-link").href = projectData.link;
			document.getElementById("project-github").href = projectData.github;

			const technologiesList = document.getElementById(
				"project-technologies"
			);
			projectData.technologies.forEach((tech) => {
				const listItem = document.createElement("li");
				listItem.textContent = tech;
				technologiesList.appendChild(listItem);
			});
		} else {
			console.error("Projet non trouvé !");
		}
	})
	.catch((error) => {
		console.error("Erreur lors du chargement des données:", error);
	});
