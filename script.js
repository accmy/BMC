    
        fetch('https://api.jsonstorage.net/v1/json/7c20db27-5dc6-4aef-b429-7f4aac595d15/70f0547b-d8d0-4f41-90ee-282fe444c693')
            .then(response => response.json())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    
