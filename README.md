# Clove Dental Landing Page Clone

## Project Overview

This project is a static landing page for Clove Dental, designed to replicate the visual layout and key sections of their official website's landing pages, based on the provided screenshots. The goal is to demonstrate modern web development practices using HTML5 for structure and CSS3 for styling, focusing on responsive design and visual accuracy.

## Features

The landing page includes the following key sections:

* **Header:** (Placeholder) A top navigation bar with a logo, navigation links, and a "Book Appointment" button.
* **Hero Section:** (Placeholder) A prominent banner with a main heading, subheading, and a call-to-action form for free consultation.
* **Metrics Section:** (Placeholder) Displays key statistics about Clove Dental (e.g., clinics, dentists, happy patients).
* **Root Canal Treatment Section:** (Placeholder) Details about different types of RCT, including starting prices and consultation buttons.
* **Patient Testimonials (Real Smiles, Real Transformations):** (Placeholder) A carousel-like display of patient success stories.
* **Why Choose Clove Dental:** (Placeholder) Highlights the advantages of choosing Clove Dental with an accordion-style list and an image.
* **What Our Patients Say:** (Placeholder) Another section for patient reviews, with profiles and treatment types.
* **Book an Appointment (Bottom Form):** (Placeholder) A concise form at the bottom for quick appointment booking.
* **Safety, Precision, and Innovation:** Showcases Clove Dental's commitment to safety, cleanliness, and advanced technology with three distinct cards featuring background images.
* **Google Reviews:** (Placeholder) Displays snippets of Google reviews with ratings and reviewer details.
* **Find Us Across India:** Interactive section allowing users to select a city to find clinics, accompanied by clinic images.
* **Expert Guidance / Anniversary Plan:** Features a consultation booking form, a special 14th-anniversary promotion, and details of a dental health plan.
* **Frequently Asked Questions (FAQ):** An expandable/collapsible list of common questions.
* **Footer:** (Placeholder) Basic footer with copyright information and privacy/terms links.
* **Cookie Consent Banner:** (Placeholder) A bottom banner for cookie policy consent.

*(Note: Sections marked "Placeholder" were built out in HTML/CSS based on the screenshots, but their full interactivity like carousels or complete form validation might require additional JavaScript not fully implemented in the provided code snippets.)*

## Technologies Used

* **HTML5:** For semantic structure and content organization.
* **CSS3:** For styling, layout (Flexbox and CSS Grid), and responsive design.

## Setup Instructions

To view and run this project locally, follow these steps:

1.  **Clone the repository (or download the files):**
    If you're using Git:
    ```bash
    git clone <repository-url>
    cd clove-dental-landing-page-clone
    ```
    If you downloaded a ZIP file, extract it to your desired location.

2.  **Create `index.html`:** Copy the provided HTML code into a file named `index.html`.

3.  **Create `style.css`:** Copy the provided CSS code into a file named `style.css` in the **same directory** as `index.html`.

4.  **Add Images:** This is crucial! The project relies on several images for its visual appearance. You need to place these images in the correct locations (or update the `src` and `url()` paths in the HTML and CSS files).
    * `Dehli.jpg`, `Bangalore.jpg`, `Mumbai.jpg`, `Chennai.jpg`, `Hyderabad.jpg`, `Punjab.jpg`, `Pune.jpg`, `Ahemdabad.jpg` (City icons in "Find Us Across India")
    * `clinic1.jpg`, `clinic2.jpg`, `clinic3.jpg`, `clinic4.jpg` (Clinic images in "Find Us Across India")
    * `Image.jpg` (Anniversary promo image)
    * `path/to/uncompromised_safety_bg.jpg`, `path/to/assuring_cleanliness_bg.jpg`, `path/to/experience_aips_bg.jpg` (Background images for the feature cards in "Safety, Precision, and Innovation")
    * **Placeholder Images:**
        * `path/to/clove_logo.png`
        * `path/to/hero_background_doctor_image.jpg`
        * `path/to/root_canal_treatment_diagram.png`
        * `path/to/re_root_canal_treatment_diagram.png`
        * `path/to/patient_arjun.jpg`, `path/to/patient_kavita.jpg`, etc. (Testimonial patient images)
        * `path/to/why_choose_clove_image.jpg`
        * `path/to/patient_shubham.jpg`, etc. (What Our Patients Say images)
        * `path/to/google_g_icon.png`
        * `path/to/neha_singh_avatar.jpg` (Google review avatar)
        * `path/to/clove_dental_footer_logo.png`

    **Make sure the image paths in your `index.html` and `style.css` exactly match the location of your image files.**

5.  **Open in Browser:** Open the `index.html` file directly in your web browser (e.g., by double-clicking it).

## Usage

This project is a static HTML/CSS demonstration. It's intended to be a visual representation of the design.

* **Responsive Design:** The layout is designed to adapt to various screen sizes, from mobile devices to desktop computers.
* **Interactive Elements:** While some elements like FAQ items and "Why Choose Us" list items have basic click handlers in the `script` tag, more advanced interactivity (like carousels, form submission logic, or full accordion functionality) would require additional JavaScript development.

## Customization

* **Colors & Fonts:** Modify the CSS variables (if any are defined, or directly in the CSS rules) to change the color scheme and fonts.
* **Content:** Update the text content, images, and links in the HTML to suit your specific needs.
* **New Sections:** Add more sections as required by creating new `<section>` elements in HTML and defining their styles in CSS.
* **Interactivity:** Extend the JavaScript to add more dynamic features.

## Contributing

This project is primarily a template/demonstration. However, if you have suggestions for improvements or find issues, feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
(You'd need to create a `LICENSE` file in your repository if you want to explicitly include one.)
