var type = new Typed('.typing-text', {
    strings: ['a Full Stack Developer', 'an Aspiring Software Engineer', 'a Google DSC Lead', 'a Open Source Contributor'],
    typeSpeed: 120,
    loop: true
  });
  
  $(document).ready(function () {
    $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
    });
    
    //smooth scroll
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        1000, 
        'linear'
      );
  
    });
  });
  
  AOS.init({
    duration: 1000,
    once: true,
  });
  
  
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("anim");
      }
      else {
        reveals[i].classList.remove("anim");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();

  // ********************************ChatBot******************************************************************

  // Simple Chatbot Logic
  document.getElementById('send-btn').addEventListener('click', sendMessage);

  // Listen for "Enter" key press in the input field
  document.getElementById('user-input').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          sendMessage();
      }
  });

  function sendMessage() {
      const userInput = document.getElementById('user-input').value;
      if (userInput.trim() === '') return;

      displayMessage(userInput, 'user');

      const botResponse = getBotResponse(userInput);
      setTimeout(() => {
          displayMessage(botResponse, 'bot');
      }, 500);

      document.getElementById('user-input').value = '';
  }

  function displayMessage(message, sender) {
      const messageContainer = document.createElement('div');
      messageContainer.className = sender === 'user' ? 'user-message' : 'bot-message';
      messageContainer.textContent = message;
      document.getElementById('chatbot-messages').appendChild(messageContainer);
      document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
  }

  function getBotResponse(input) {
    input = input.toLowerCase();

    // Personal Information
    if (input.includes('who is nagesh kharat?') || input.includes('who are you') || input.includes('can you tell me about yourself') || input.includes('introduce yourself')) {
        return 'I am Nagesh Kharat, a final-year student specializing in web development and software engineering. I am passionate about creating innovative solutions and enhancing user experiences.';
    }
    if (input.includes('contact') || input.includes('email') || input.includes('how can i contact you') || input.includes('what is your email')) {
        return 'You can contact me via email at nageshkharat1910@gmail.com or connect with me on LinkedIn at linkedin.com/in/nagesh-kharat.';
    }
    if (input.includes('location') || input.includes('where are you from') || input.includes('what is your location')) {
        return 'I am based in Nanded, India.';
    }

    // Skills and Technologies
    if (input.includes('skills') || input.includes('skill') || input.includes('what skills do you have') || input.includes('what are your skills') || input.includes('what technologies are you familiar with')) {
        return 'I have skills in HTML, CSS, JavaScript, React.js, Node.js, Python, C/C++, SQL, and more. I am also familiar with version control systems like Git and GitHub.';
    }
    if (input.includes('languages') || input.includes('programming languages') || input.includes('what programming languages do you know') || input.includes('what languages do you code in')) {
        return 'I am proficient in JavaScript, Python, C/C++, and Java.';
    }
    if (input.includes('frameworks') || input.includes('libraries') || input.includes('what frameworks do you use') || input.includes('are you familiar with any libraries')) {
        return 'I have experience with React.js, Next.js, Node.js, and various other libraries and frameworks.';
    }

    // Projects
    if (input.includes('projects') || input.includes('project') || input.includes('can you tell me about your projects') || input.includes('what projects have you worked on')) {
        return 'I\'ve worked on several projects, including a Canvas Editor, Portfolio Website, and Expense Tracker, demonstrating my abilities in front-end development and user experience design.';
    }
    if (input.includes('tell me about the canvas editor project') || input.includes('what is your canvas editor project about')) {
        return 'The Canvas Editor is a React.js project where users can customize images, add text captions, and apply call-to-action elements using HTML Canvas and Tailwind CSS.';
    }
    if (input.includes('describe your portfolio website') || input.includes('what does your portfolio website do')) {
        return 'My Portfolio Website showcases my skills, projects, and experience using HTML5, CSS3, and JavaScript. It features an interactive and visually appealing user interface to engage visitors.';
    }
    if (input.includes('what is your expense tracker project') || input.includes('can you explain your expense tracker')) {
        return 'The Expense Tracker is a web app for managing personal finances, featuring real-time balance updates and transaction recording, built with HTML5, CSS3, and JavaScript.';
    }

    // Experience
    if (input.includes('experience') || input.includes('work experience') || input.includes('what experience do you have') || input.includes('can you describe your work experience')) {
        return 'I am currently a SWE Fellow at Headstarter AI, where I work on developing software solutions. Previously, I was the Lead for Google Developer Student Club, managing a team and organizing workshops.';
    }
    if (input.includes('what internship experience do you have') || input.includes('have you done any internships')) {
        return 'I am seeking a Software Engineer Internship to further develop my skills and gain hands-on experience in software development.';
    }

    // Education
    if (input.includes('education') || input.includes('degree') || input.includes('what is your educational background') || input.includes('where did you study') || input.includes('what degree are you pursuing')) {
        return 'I am pursuing a B.Tech in Electronics and Telecommunication Engineering at MGM\'s College of Engineering, Nanded, expected to graduate in 2025.';
    }
    if (input.includes('college') || input.includes('university') || input.includes('which college are you attending') || input.includes('what is your university')) {
        return 'I am studying at MGM\'s College of Engineering, Nanded, India.';
    }

    // Achievements
    if (input.includes('achievements') || input.includes('award') || input.includes('what are your achievements') || input.includes('have you won any awards') || input.includes('tell me about your accomplishments')) {
        return 'I received the GEM of MGM Award in 2024 for academic excellence and extracurricular achievements. I also published a research paper on MRI Brain Tumor Detection.';
    }
    if (input.includes('research paper') || input.includes('publication') || input.includes('have you published any papers') || input.includes('what is your research paper about')) {
        return 'I published a paper titled "Grade Based MRI Brain Tumor Detection and Segmentation Using Optimal Feature Selection with ASFO" at an international conference.';
    }
    if (input.includes('coding competition') || input.includes('contest') || input.includes('have you participated in coding competitions') || input.includes('have you won any coding contests')) {
        return 'I won the Blind C Coding Competition in March 2022, demonstrating proficiency in C programming and competitive coding.';
    }

    // Soft Skills
    if (input.includes('soft skills') || input.includes('communication') || input.includes('what are your soft skills') || input.includes('do you have good communication skills')) {
        return 'I excel in problem-solving, communication, teamwork, adaptability, creative writing, and public speaking.';
    }
    if (input.includes('how do you work in teams') || input.includes('describe your teamwork skills')) {
        return 'I have strong teamwork skills, demonstrated by leading a 17-member team at Google Developer Student Club and collaborating on various projects. I value collaboration and knowledge sharing.';
    }

    // Technical Questions
    if (input.includes('how do you approach debugging') || input.includes('how do you solve problems')) {
        return 'I approach debugging by systematically identifying and resolving issues using tools like Git for version control and VS Code for development. I focus on understanding the root cause of the problem.';
    }
    if (input.includes('do you have experience with apis') || input.includes('how do you handle documentation')) {
        return 'I have experience creating and updating technical documentation for APIs and software components to ensure clarity and ease of use for developers. I prioritize accuracy and completeness in documentation.';
    }
    if (input.includes('how do you ensure software quality') || input.includes('do you have testing experience')) {
        return 'I conduct unit testing and assist in developing test cases to ensure software reliability and meet quality standards. I believe testing is crucial for maintaining high-quality software products.';
    }

    // General Responses
    if (input.includes('hello') || input.includes('hi') || input.includes('hello') || input.includes('hi')) {
        return 'Hello! How can I assist you today?';
    }
    if (input.includes('thank you') || input.includes('thanks') || input.includes('thank you') || input.includes('thanks')) {
        return 'You\'re welcome! If you have any more questions, feel free to ask.';
    }
    if (input.includes('bye') || input.includes('goodbye')) {
        return 'Goodbye! Have a great day!';
    }
    if (input.includes('great') || input.includes('amazing') || input.includes('Looks great') || input.includes('ok') || input.includes('ohk')) {
      return 'Thank You! Do you have any other questions for me? I will be happy to answer your questions!';
  }
  if (input.includes('how are you') || input.includes('what about you') || input.includes('how about you') || input.includes('are you ok') || input.includes('ok') || input.includes('ohk')) {
    return 'I am good! What about You?';
  }
  if (input.includes('i am good too') || input.includes('good') || input.includes('i am fine') || input.includes('i am ok') || input.includes('fine') || input.includes('feeling good')) {
    return 'Nice to hear! Do you have any questions for me?';
  }
  if (input.includes('do you have gf') || input.includes('gf') || input.includes('are you in relationship') || input.includes('do you have girlfriend') || input.includes('any gf') || input.includes('are you in love with someone')) {
    return 'Not really! But, i am in love with my career. Yes, I am not in relationship yet. Do you have any other question? Feel free to ask!';
  }

    return 'I\'m sorry, I didn\'t understand that. Can you please rephrase or ask something else?';
}


  function toggleChatbot() {
      const chatbotContainer = document.getElementById('chatbot-container');
      chatbotContainer.classList.toggle('open');
  }
