document.addEventListener('DOMContentLoaded', () => {
    const togglers = document.querySelectorAll('[data-toggle]');
    
      togglers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
           const selector = e.currentTarget.dataset.toggle
           const block = document.querySelector(`${selector}`);
          if (e.currentTarget.classList.contains('active')) {
            block.style.maxHeight = '';
          } else {
            block.style.maxHeight = block.scrollHeight + 'px';
          }
            
           e.currentTarget.classList.toggle('active')
        })
      });
      const date = new Date();
    //   const year = 2023
      const year = date.getFullYear();
      const rights = document.querySelector(".rights");
      if (rights) {
        rights.innerHTML = `All rights reserved by Superior Sights Charity Organization ${year}`;
      }
      });