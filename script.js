document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    if (!form) {
        return;
    }

    var status = document.getElementById('form-status');
    var nameInput = document.getElementById('contact-name');
    var emailInput = document.getElementById('contact-email');
    var messageInput = document.getElementById('contact-message');
    var topicFieldset = document.getElementById('contact-topic-fieldset');
    var topicError = document.getElementById('contact-topic-error');
    var topicInputs = form.querySelectorAll('input[name="topic"]');

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function setFieldError(input, message) {
        var error = document.getElementById(input.id + '-error');
        input.setAttribute('aria-invalid', 'true');
        if (error) {
            error.textContent = message;
        }
    }

    function clearFieldError(input) {
        var error = document.getElementById(input.id + '-error');
        input.setAttribute('aria-invalid', 'false');
        if (error) {
            error.textContent = '';
        }
    }

    function setTopicError(message) {
        topicFieldset.setAttribute('aria-invalid', 'true');
        topicError.textContent = message;
    }

    function clearTopicError() {
        topicFieldset.setAttribute('aria-invalid', 'false');
        topicError.textContent = '';
    }

    function selectedTopic() {
        var selected = form.querySelector('input[name="topic"]:checked');
        return selected ? selected.value : '';
    }

    function clearStatus() {
        status.className = 'form-status';
        status.removeAttribute('role');
        status.textContent = '';
    }

    function showStatus(type, message) {
        status.className = 'form-status ' + (type === 'success' ? 'is-success' : 'is-error');
        status.setAttribute('role', type === 'success' ? 'status' : 'alert');
        status.textContent = message;
    }

    function validateName() {
        var value = nameInput.value.trim();
        if (value === '') {
            setFieldError(nameInput, 'Error: Enter your name.');
            return false;
        }
        if (value.length < 2) {
            setFieldError(nameInput, 'Error: Name must be at least 2 characters.');
            return false;
        }
        clearFieldError(nameInput);
        return true;
    }

    function validateEmail() {
        var value = emailInput.value.trim();
        if (value === '') {
            setFieldError(emailInput, 'Error: Enter your email address.');
            return false;
        }
        if (!isValidEmail(value)) {
            setFieldError(emailInput, 'Error: Enter a valid email address, such as name@example.com.');
            return false;
        }
        clearFieldError(emailInput);
        return true;
    }

    function validateTopic() {
        if (!selectedTopic()) {
            setTopicError('Error: Choose a reason for your message.');
            return false;
        }
        clearTopicError();
        return true;
    }

    function validateMessage() {
        var value = messageInput.value.trim();
        if (value === '') {
            setFieldError(messageInput, 'Error: Enter a message.');
            return false;
        }
        if (value.length < 10) {
            setFieldError(messageInput, 'Error: Message must be at least 10 characters.');
            return false;
        }
        clearFieldError(messageInput);
        return true;
    }

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    topicInputs.forEach(function (input) {
        input.addEventListener('change', validateTopic);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearStatus();

        var nameOk = validateName();
        var emailOk = validateEmail();
        var topicOk = validateTopic();
        var messageOk = validateMessage();

        if (!nameOk || !emailOk || !topicOk || !messageOk) {
            var errorCount = [nameOk, emailOk, topicOk, messageOk].filter(function (ok) {
                return !ok;
            }).length;
            var errorLabel = errorCount === 1 ? '1 error' : errorCount + ' errors';
            showStatus('error', 'Please fix the ' + errorLabel + ' in the form. Each issue is described next to the field.');

            if (!nameOk) {
                nameInput.focus();
            } else if (!emailOk) {
                emailInput.focus();
            } else if (!topicOk) {
                document.getElementById('topic-collaboration').focus();
            } else {
                messageInput.focus();
            }
            return;
        }

        showStatus('success', 'Thank you. Your message looks complete. This contact form is a front-end demo and does not send email yet.');
        form.reset();
        clearFieldError(nameInput);
        clearFieldError(emailInput);
        clearFieldError(messageInput);
        clearTopicError();
        status.focus();
    });
});
