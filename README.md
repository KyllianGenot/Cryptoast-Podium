# Cryptoast Podium

An interactive and visually appealing podium for showcasing the top three entities (tokens, articles, etc.), specifically designed for Cryptoast as part of a front-end developer internship test.

## 🌟 Features

- **Fully Responsive:** The podium adjusts dynamically for different screen sizes, ensuring an optimal user experience on desktop and mobile devices.
- **Attractive Visual Design:** With vibrant colors and smooth transitions, the podium captures attention while maintaining a professional look.
- **Optimized Performance:** Minimal loading times with lazy-loading techniques and lightweight code.
- **JSON Integration:** Simplified data management using a `podiumData.json` file, enabling effortless customization of the podium's content.
- **Ease of Use:** Easy-to-integrate and reusable component across multiple pages with a clean and modular structure.
- **Interactive Navigation:** Each podium spot is clickable, redirecting the user to relevant external links for further exploration.

---

## 🚀 Live Demo

**[View Live Project](https://cryptoast-podium.surge.sh/)**

---

## 📂 Project Structure

```
Cryptoast-Podium
│
├── assets
│   ├── css
│   │   └── styles.css        # Styling for the podium and overall layout
│   ├── js
│   │   └── script.js         # Main JavaScript logic for dynamic podium generation
│   ├── json
│   │   └── podiumData.json   # JSON file for managing podium data (rank, logo, description, etc.)
│   └── logos                 # Directory for podium logos
│       ├── btc.png
│       ├── eth.png
│       └── bnb.png
│
├── index.html                # Main HTML file
├── LICENSE                   # License file
└── README.md                 # Project documentation (this file)
```

---

## 🛠️ How It Works

1. **Dynamic Podium Generation:**
   - The podium data is fetched from `podiumData.json`.
   - Each podium spot is dynamically created using JavaScript, ensuring seamless integration with any dataset.

2. **Customizable JSON Structure:**
   - Modify `podiumData.json` to update the podium without changing the code.
   ```json
   [
       {
           "rank": "1",
           "logo": "assets/logos/btc.png",
           "subtitle": "Bitcoin (BTC)",
           "description": "The original cryptocurrency, leading the market since its inception.",
           "link": "https://bitcoin.org"
       },
       {
           "rank": "2",
           "logo": "assets/logos/eth.png",
           "subtitle": "Ethereum (ETH)",
           "description": "The second-largest crypto by market cap, popular for smart contracts.",
           "link": "https://ethereum.org"
       },
       {
           "rank": "3",
           "logo": "assets/logos/bnb.png",
           "subtitle": "Binance Coin (BNB)",
           "description": "The native token of Binance, supporting its blockchain ecosystem.",
           "link": "https://www.binance.com"
       }
   ]
   ```

3. **Responsive Design:**
   - Fully responsive, adapting to both desktop and mobile layouts for consistent user experience.
   - Media queries ensure optimized display for different screen sizes.

---

## 🎨 Visual Design

### Podium Ranks:
- **#1:** Highlighted in gold, with the tallest spot.
- **#2:** Highlighted in blue, slightly shorter than the first.
- **#3:** Highlighted in green, the shortest spot.

### Hover Effects:
- Smooth hover animations bring interactivity and highlight the podium spots.

### Fonts:
- The project uses the `Sora` font for a clean and modern look.

---

## 💻 Technologies Used

- **HTML5:** Semantic and accessible markup.
- **CSS3:** Custom styles and responsive design.
- **JavaScript:** Dynamic rendering and interactivity.
- **JSON:** Easy-to-use data management.

---

## 📋 Instructions for Use

1. Clone the repository:
   ```bash
   git clone https://github.com/KyllianGenot/Cryptoast-Podium.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cryptoast-podium
   ```

3. Open `index.html` in a web browser to view the podium locally.

4. Customize `podiumData.json` to add or update podium entries.

---

## ✨ Highlights for Cryptoast

- **Scalable Design:** The podium is designed to be easily integrated into larger projects, making it versatile for Cryptoast's needs.
- **Simplicity with JSON:** Updating podium data is as simple as editing a JSON file, making it accessible for non-developers.
- **Modern Front-End Practices:** This project demonstrates a strong understanding of modern front-end principles, ensuring clean code and reusable components.

---

## 🙌 About the Author

**Kyllian GENOT**  
A passionate front-end developer with experience in creating dynamic and visually appealing web projects. Skilled in HTML, CSS, JavaScript, and responsive design.
