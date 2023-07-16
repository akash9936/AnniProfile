
// Define an array of colors
export const colors: string[] = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"];

// Function to change the website color
export function changeWebsiteColor(): void {
  // Generate a random index to select a color from the array
  const randomIndex: number = Math.floor(Math.random() * colors.length);

  // Get the <body> element or any other element you want to change the color of
  const bodyElement: HTMLElement | null = document.body;

  // Set the background color to the randomly selected color
  if (bodyElement) {
    bodyElement.style.backgroundColor = colors[randomIndex];
  }
}