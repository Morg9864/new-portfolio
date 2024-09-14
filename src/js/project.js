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
			const projectImage = document.getElementById("project-image");

			// Lorsque l'image est chargée, cacher le spinner et afficher l'image
			projectImage.onload = function () {
				// Cacher le spinner
				document.getElementById("image-spinner").classList.add("hidden");

				// Afficher l'image
				projectImage.classList.remove("hidden");
			};

			// Définir l'URL de l'image et la charger
			projectImage.src = projectData.image;

			// Lien du projet et GitHub
			document.getElementById("project-link").href = projectData.link;
			document.getElementById("project-github").href = projectData.github;

			// Liste des technologies
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
