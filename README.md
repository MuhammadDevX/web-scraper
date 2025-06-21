---

## 📄 Professional README.md

```markdown
# 📄 PDF Web Scraper & Downloader

This repository contains a simple, complete workflow to scrape PDF links from a webpage using a Python web scraper, then download those PDFs via a Node.js backend and a browser-based frontend interface.

---

## 📦 Features

- Web scraper built with **BeautifulSoup** to extract PDF links from a target webpage.
- A **Node.js + Express** backend that proxies and forces download of those PDFs (bypassing browser inline display).
- A clean HTML frontend with a **Download All** button to sequentially download all PDFs with controlled timing to prevent browser conflicts.

---

## 📂 Project Structure

```

project-root/
├── scraper.ipynb          # Python web scraper notebook (extracts PDF links)
├── server.js              # Node.js + Express backend server
├── package.json
├── index.html         # Frontend interface to trigger PDF downloads
└── README.md              # Project documentation

````

---

## 🚀 How to Use

### 1️⃣ Extract PDF Links

- Open `scraper.ipynb` using Jupyter Notebook or Google Colab.
- Run the notebook cells to scrape the target webpage.
- Ensure that **all links returned in the final cell output are direct links to `.pdf` files**.
- Copy the resulting list of PDF URLs.

---

### 2️⃣ Configure Frontend Download List

- Open `index.html`.
- Replace the `pdfLinks` array in the `<script>` section with the array of PDF URLs you obtained from the notebook.

```javascript
const pdfLinks = [
  "https://example.com/file1.pdf",
  "https://example.com/file2.pdf",
  ...
];
````

---

### 3️⃣ Run the Backend Server

In the project root directory:

```bash
npm install
npm start
```

This will start the Node.js backend at `http://localhost:3000`.

---

### 4️⃣ Start the Frontend

* Open `public/index.html` by **double-clicking it in your file explorer** (no need to host it separately).
* Click the **Download All Cases** button.
* The PDFs will start downloading one after another, with a delay to prevent overlapping browser downloads.

---

## 📌 Notes

* The scraper must extract **direct PDF file links** (URLs ending with `.pdf`).
* The backend uses a proxy to fetch and serve the files with a `Content-Disposition: attachment` header to force download.
* The frontend sequentially triggers downloads with a configurable delay between each download.

---

## 💾 Dependencies

* **Python**

  * `beautifulsoup4`
  * `requests`
  * `jupyter`
* **Node.js**

  * `express`
  * `request` (for proxying PDF fetches)

---

## 📃 License

This project is for educational and personal use. Review and comply with the terms of use for any target websites you scrape.

---

## 📞 Contact

For questions or suggestions, feel free to reach out via \[[muhammad.bese23seecs@seecs.edu.pk](mailto:your_email@example.com)] or open an issue in this repository.
