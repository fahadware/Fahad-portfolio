
    // Blog data — currently 4 blogs
    const blogs = [
      {
        title: "BTS of Web and internet Working",
        date: "jul 20, 2025",
        desc: "Explore the behind-the-scenes of how the web and internet work, from protocols to browsers and servers.",
        img: "./web.jpg",
        link: "https://fahadware.hashnode.dev/how-web-works",
      },
      {
        title: "Master Advance Javascript",
        date: "Jul 22, 2025",
        desc: "Master advanced JavaScript concepts, including Dom,Bom ,closures, async/await, ES6 features, and best practices.",
        img: "./js.png",
        link: "https://fahadware.hashnode.dev/mastering-advanced-javascript",
      },
    
    ];
  

    // Get grid container
    const blogGrid = document.getElementById("blogGrid");

    // Inject cards into HTML
    blogs.forEach((blog, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${blog.img}" alt="${blog.title}">
            <div class="card-content">
                <h3>${blog.title}</h3>
                <div class="date">${blog.date}</div>
                <p>${blog.desc}</p>
                <a href="${blog.link}" target="_blank">Read More</a>
            </div>
        `;

        blogGrid.appendChild(card);
        
        // Add pan animation with stagger effect
        setTimeout(() => {
            card.classList.add("pan-in-left");
        }, 200* index); // 180ms stagger between each card
    });

  