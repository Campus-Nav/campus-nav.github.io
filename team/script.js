document.addEventListener('DOMContentLoaded', () => {
    // Sample team member data - replace with your actual team members
    const teamMembers = {
        'member1': {
            name: 'Austin Koola',
            description: '',
            image: '', // Add image path
            linkedin: 'https://linkedin.com/in/member1',
            github: 'https://github.com/member1',
            portfolio: 'https://member1.dev'
        },
        'member2': {
            name: 'Ben Rainer',
            description: 'Ben Rainer is a software engineering student and web developer. He is responsible for some of the front-end development and quality assurance in CampusNav. He enjoys contributing to programming projects that solve problems and improve his community, and he is excited to be a part of the CampusNav team. In his spare time, he enjoys playing jazz trumpet.',
            image: '', // Add image path
            linkedin: 'https://linkedin.com/in/member2',
            github: 'https://github.com/member2',
            portfolio: 'https://member2.dev'
        },
        'member3': {
            name: 'Daniel Lieu',
            description: '',
            image: '', // Add image path
            linkedin: 'https://linkedin.com/in/member2',
            github: 'https://github.com/member2',
            portfolio: 'https://member2.dev'
        },
        'member4': {
            name: 'Fatima Kanj',
            description: '',
            image: '', // Add image path
            linkedin: 'https://linkedin.com/in/member2',
            github: 'https://github.com/member2',
            portfolio: 'https://member2.dev'
        },
        'member5': {
            name: 'Najib Mauthoor',
            description: '',
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
    const portfolioLink = overlay.querySelector('.portfolio-link');

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
