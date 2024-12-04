// Supabase bilgileri
const SUPABASE_URL = 'https://iotbqtghuyukirighzsu.supabase.co'; // Supabase Project URL
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvdGJxdGdodXl1a2lyaWdoenN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyODA5MzAsImV4cCI6MjA0ODg1NjkzMH0.sn2Teu3OdvfwelJKHkLvY2HRrfipy96UUkgsh2LU0To'; // Supabase Anon Key

// API bağlantı noktası (Tablo adınız "iletisim" olarak varsayıldı)
const API_URL = `${SUPABASE_URL}/rest/v1/iletisim`;

// Form gönderimini işleme
document.getElementById('contactForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Sayfanın yenilenmesini engelle
  
  // Form verilerini al
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Supabase API'ye POST isteği gönder
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_API_KEY,
      'Authorization': `Bearer ${SUPABASE_API_KEY}`
    },
    body: JSON.stringify({
      adsoyad: name,
      mail: email,
      mesaj: message
    })
  });

  // Yanıtı kontrol et ve kullanıcıya mesaj göster
  if (response.ok) {
    alert('Mesajınız başarıyla gönderildi!');
    document.getElementById('contactForm').reset(); // Formu temizle
  } else {
    alert('Mesaj gönderimi sırasında bir hata oluştu.');
  }
});