# 🐱 Space Cats

### Overview
**Space Cat Adventures**  A customizable text and image (or vice versa) component with 3 different ways to load it. 

## 🛠️ Installation & Setup
Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Caiko/space-cats.git
   cd space-cats
2. **Install dependencies**:
   ```bash
   npm install
3. **Run the development server**:
   ```bash
    npm run dev
4. **Open the application**: Press **o** and hit **Enter**

## ✨ Customization

The `TextImg` component allows you to change the layout and styling by passing various props. Here are the props you can modify:

- **`imgPosition`**: Controls image placement (`"left"` or `"right"`).
- **`textPosition`**: Controls text placement (`"top"`, `"center"`, or `"bottom"`).
- **`backgroundColor`**: Sets the background color of the component.
- **`headerOneColor`** & **`headerTwoColor`**: Adjust the color of the first (`<h1>`) and second (`<h2>`) headers.

## 📄 Alternative Solutions

The project has three alternative solutions for handling the data shown in the app. To try them out, you have to copy and paste the contents of the `.txt` files from the `alternative-solutions` folder into the `App.jsx` file:

1. **`fetch-api.txt`**: Makes an API call to `fetch` the data. 
2. **`from-json.txt`**: Pulls content from a JSON file.
3. **`hard-coded.txt`**: The content is hard-coded (this is the "default").

Choose a solution, replace the content in `App.jsx`, and see if it works! 


### Preview
![image](https://github.com/user-attachments/assets/ca2f5272-b411-40e9-ba67-1cae946acfcb)

### Project Structure
```bash
space-cats/
│
├── src/
│   ├── components/
│   │   ├── TextImg.jsx          
│   ├── App.jsx                  
│   ├── main.jsx                 
│   ├── assets/
│   │   ├── cat1.png             
│   │   ├── cat2.png             
│   ├── alternative-solutions/   # Folder containing alternative solutions
│   │   ├── fetch-api.txt        # Fetching the data locally but the same goes for an online source
│   │   ├── from-json.txt        # Loading data from a JSON file
│   │   ├── hard-coded.txt       # Hard-coded data 
│   ├── data/   # Folder containing JSON file
│   │   ├── space-cats.json 
