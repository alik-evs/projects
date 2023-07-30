document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const startButton = document.getElementById('startButton');
    const nameForm = document.getElementById('nameForm');
    const userNameInput = document.getElementById('userName');
    const submitNameButton = document.getElementById('submitName');
    const userInfo = document.getElementById('userInfo');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const tabsContainer = document.getElementById('tabsContainer');
    const todayProgressTab = document.getElementById('todayProgressTab');
    const todayProgress = document.getElementById('todayProgress');
  // блок с юзер неймом
    let userName = '';
  
    function showNameForm() {
      welcomeMessage.style.display = 'none';
      nameForm.style.display = 'block';
    }
  
    function saveUserName() {
      userName = userNameInput.value.trim();
      if (userName.match(/^[A-Za-z-]+$/)) {
        userNameDisplay.textContent = `Hi, ${userName}!`;
        nameForm.style.display = 'none';
        userInfo.style.display = 'block';
        tabsContainer.style.display = 'flex';
        showTodayProgress();
      } else {
        alert('Sorry, name cannot contain digits and special symbols except "-"');
      }
    }
  // блок с прогрессом
    function showTodayProgress() {
      todayProgress.style.display = 'block';
      todayProgressTab.classList.add('active');
      const now = new Date();
      if (now.getHours() >= 23 && now.getMinutes() >= 59) {
        checkCompletion();
      } else {
        const checkboxes = document.querySelectorAll('#todayProgress input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', checkCompletion);
        });
      }
    }
  
    function checkCompletion() {
      const checkboxes = document.querySelectorAll('#todayProgress input[type="checkbox"]');
      let allChecked = true;
      checkboxes.forEach((checkbox) => {
        checkbox.disabled = checkbox.checked;
        allChecked = allChecked && checkbox.checked;
      });
      if (allChecked) {
        const completionMessage = document.createElement('p');
        completionMessage.textContent = 'You achieved a goal - plan is complete';
        todayProgress.appendChild(completionMessage);
      }
    }
  
    submitNameButton.addEventListener('click', saveUserName);
    startButton.addEventListener('click', showNameForm);
  });
  