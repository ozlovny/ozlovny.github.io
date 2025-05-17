  <script>
  function generateHash() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }

        // Initialize the hash and set it in the debug panel
        document.getElementById('hash').textContent = `Hash: ${generateHash()}`;

        // Initialize a timer that starts from 0 seconds
        let elapsedSeconds = 0;

        // Update the time every second
        setInterval(() => {
            elapsedSeconds++;
            document.getElementById('time').textContent = `Time: ${elapsedSeconds} seconds`;
        }, 1000);
  </script>
