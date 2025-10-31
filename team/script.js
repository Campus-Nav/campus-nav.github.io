document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = {
        'member1': {
            name: 'Austin Koola',
            description: '',
            image: 'wdawda', // Add image path
            linkedin: 'https://www.linkedin.com/in/austinkoola/',
            github: 'https://github.com/moonieweme',
        },
        'member2': {
            name: 'Ben Rainer',
            description: 'Ben Rainer is a software engineering student and web developer. He is responsible for some of the front-end development and quality assurance in CampusNav. He enjoys contributing to programming projects that solve problems and improve his community, and he is excited to be a part of the CampusNav team. In his spare time, he enjoys playing jazz trumpet.',
            image: './Images/ben.jpg', 
            linkedin: 'https://www.linkedin.com/in/benrainer/',
            github: 'https://github.com/ben-rainer',
        },
        'member3': {
            name: 'Daniel Lieu',
            description: '',
            image: 'wadawd', // Add image path
            linkedin: 'https://www.linkedin.com/in/daniel-lieu-9514a4388/',
            github: 'https://github.com/teikoku-dansei',
            
        },
        'member4': {
            name: 'Fatima Kanj',
            description: '',
            image: 'wdawda', // Add image path
            linkedin: 'https://www.linkedin.com/in/fatima-k-7798a2246/',
            github: 'https://github.com/fkanj70',
        },
        'member5': {
            name: 'Najib Mauthoor',
            description: 'Najib Mauthoor is a software engineering student and web developer. He designed the Team Page and contributed to the overall website development for CampusNav. Passionate about technology and gaming, he enjoys exploring how innovation shapes the future and continues to improve his programming skills through creative projects.',
            image: './Images/Najib.jpg', 
            linkedin: 'https://www.linkedin.com/in/najib-mauthoor-806410269/',
            github: 'https://github.com/Treforis',
        
        },
        
    };

    const overlay = document.getElementById('member-overlay');
    const closeBtn = overlay.querySelector('.close-btn');
    const memberImage = overlay.querySelector('.member-image-large');
    const memberName = overlay.querySelector('.member-name');
    const memberDescription = overlay.querySelector('.member-description');
    const linkedinLink = overlay.querySelector('.linkedin-link');
    const githubLink = overlay.querySelector('.github-link');

    // Add click event listeners to all "About Me" buttons
    document.querySelectorAll('.about').forEach((button, index) => {
        button.addEventListener('click', () => {
            // Get the member data based on index
            const memberData = teamMembers[`member${index + 1}`];
            
            if (memberData) {
                // Update overlay content
                memberName.textContent = memberData.name;
                memberDescription.textContent = memberData.description;
                if (memberData.image) {
                    memberImage.style.backgroundImage = `url(${memberData.image})`;
                }
                
                // Update links
                linkedinLink.href = memberData.linkedin;
                githubLink.href = memberData.github;
                

                // Show overlay
                overlay.style.display = 'block';
            }
        });
    });

    // Close overlay when clicking the close button
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Close overlay when clicking outside the content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    // Close overlay when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'block') {
            overlay.style.display = 'none';
        }
    });
});
