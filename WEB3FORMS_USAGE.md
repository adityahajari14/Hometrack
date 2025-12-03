# Web3Forms API Usage Summary

## API Endpoint
All forms submit to: `https://api.web3forms.com/submit`

## Files Using Web3Forms

### 1. **contact-modal.js**
- **Location**: `src/components/contact-modal.js`
- **Line**: 44, 47
- **Access Key**: `553b3d69-1e10-49a1-9de1-2d4e0160ac97`
- **Purpose**: Contact form modal
- **Fields**: Full Name, Email, Phone, Message

```javascript
formDataToSend.append("access_key", "553b3d69-1e10-49a1-9de1-2d4e0160ac97");
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formDataToSend
});
```

---

### 2. **booking-modal.js**
- **Location**: `src/components/booking-modal.js`
- **Line**: 43, 46
- **Access Key**: `553b3d69-1e10-49a1-9de1-2d4e0160ac97`
- **Purpose**: Booking/appointment form modal
- **Fields**: Full Name, Email, Date, Time
- **Additional Data**: Service name is appended

```javascript
formDataToSend.append("access_key", "553b3d69-1e10-49a1-9de1-2d4e0160ac97");
formDataToSend.append("service", serviceName || "Consultation");
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formDataToSend
});
```

---

### 3. **inquiry-modal.js**
- **Location**: `src/components/inquiry-modal.js`
- **Line**: 50, 54
- **Access Key**: `553b3d69-1e10-49a1-9de1-2d4e0160ac97`
- **Purpose**: Property inquiry form modal
- **Fields**: Name, Email, Phone (optional), Message
- **Additional Data**: Property title is appended

```javascript
formDataToSend.append('access_key', '553b3d69-1e10-49a1-9de1-2d4e0160ac97')
formDataToSend.append('property', propertyTitle)
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  body: formDataToSend
})
```

---

### 4. **contact.js** (ContactCard component)
- **Location**: `src/components/contact.js`
- **Line**: 23, 25
- **Access Key**: `553b3d69-1e10-49a1-9de1-2d4e0160ac97`
- **Purpose**: Contact form on contact page
- **Fields**: Full Name, Email, Message

```javascript
formDataToSend.append("access_key", "553b3d69-1e10-49a1-9de1-2d4e0160ac97");
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formDataToSend
});
```

---

### 5. **hero.js**
- **Location**: `src/components/hero.js`
- **Line**: 47, 50
- **Access Key**: `553b3d69-1e10-49a1-9de1-2d4e0160ac97`
- **Purpose**: Consultation booking form on hero section
- **Fields**: Full Name, Email, Date, Time
- **Additional Data**: Service is set to "General Consultation"

```javascript
formDataToSend.append("access_key", "553b3d69-1e10-49a1-9de1-2d4e0160ac97");
formDataToSend.append("service", "General Consultation");
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formDataToSend
});
```

---

## Summary Table

**All components now use the same access key:** `553b3d69-1e10-49a1-9de1-2d4e0160ac97`

| Component | Access Key | Purpose | Additional Fields |
|-----------|-----------|---------|-------------------|
| `contact-modal.js` | `553b3d69-1e10-49a1-9de1-2d4e0160ac97` | Contact form modal | - |
| `booking-modal.js` | `553b3d69-1e10-49a1-9de1-2d4e0160ac97` | Booking modal | `service` |
| `inquiry-modal.js` | `553b3d69-1e10-49a1-9de1-2d4e0160ac97` | Property inquiry | `property` |
| `contact.js` | `553b3d69-1e10-49a1-9de1-2d4e0160ac97` | Contact page form | - |
| `hero.js` | `553b3d69-1e10-49a1-9de1-2d4e0160ac97` | Hero consultation form | `service: "General Consultation"` |

## Notes

- All forms use the same API endpoint: `https://api.web3forms.com/submit`
- All forms use POST method
- **All forms now use the same unified access key**: `553b3d69-1e10-49a1-9de1-2d4e0160ac97`
- Access key is hardcoded in each component file
- Forms append the access key to FormData before submission
- Some forms append additional metadata (service name, property title)

## Security Recommendation

⚠️ **Consider moving access keys to environment variables** for better security:
- Create a `.env.local` file
- Add keys as: `NEXT_PUBLIC_WEB3FORMS_CONTACT_KEY=...`
- Reference them in code: `process.env.NEXT_PUBLIC_WEB3FORMS_CONTACT_KEY`

