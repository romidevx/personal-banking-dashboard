
export function validateForm(formData) {

  if (!formData.title.value || !formData.amount.value || formData.category.value == '-- Choose one --') {

    document.querySelector('.error__message').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.error__message').style.display = 'none';
    }, 2000);

    return false;
  }

}