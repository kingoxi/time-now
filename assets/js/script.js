function updateClock() {
            const now = new Date();

            // Saati formatla
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;

            // Tarihi Türkçe formatla
            const dateString = now.toLocaleDateString('tr-TR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // DOM güncelleme
            document.getElementById('time').textContent = timeString;
            document.getElementById('date').textContent = dateString;
        }

        // Zaman dilimini al
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        document.getElementById('timezone').textContent = timezone;

        // Saati hemen güncelle
        updateClock();

        // Her saniyede bir güncelle
        setInterval(updateClock, 1000);