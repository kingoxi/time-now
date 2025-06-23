function updateClock() {
            const now = new Date();

            // Format time with leading zeros
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;

            // Format date with Turkish locale
            const dateString = now.toLocaleDateString('tr-TR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Update time and date elements
            document.getElementById('time').textContent = timeString;
            document.getElementById('date').textContent = dateString;

            // Calculate day of year
            const start = new Date(now.getFullYear(), 0, 0);
            const diff = now - start;
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);
            document.getElementById('day-of-year').textContent = dayOfYear;

            // Calculate week number
            const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
            const pastDaysOfYear = (now - firstDayOfYear) / 86400000;
            const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
            document.getElementById('week-number').textContent = weekNumber;

            // Get day of week
            const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
            document.getElementById('day-of-week').textContent = dayOfWeek;
        }

        // Get timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        document.getElementById('timezone').textContent = timezone;

        // Update clock immediately
        updateClock();

        // Update every second
        setInterval(updateClock, 1000);