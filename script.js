const canvas = document.getElementById("clockCanvas");
const ctx = canvas.getContext("2d");
const video = document.getElementById("recordedVideo");
let mediaRecorder;
let recordedChunks = [];

function drawClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set styles
  ctx.fillStyle = "white";
  ctx.font = "bold 150px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw time
  const timeString = `${hours}:${minutes}:${seconds}`;
  ctx.fillText(timeString, canvas.width / 2, canvas.height / 2);
}

// Update clock every second
setInterval(drawClock, 1000);

// Initial draw
drawClock();

// Capture stream from canvas and start recording
function startRecording() {
  const stream = canvas.captureStream(24); // Capture at 30fps
  video.srcObject = stream;
  video.play();
}

// Start recording immediately when the page loads
window.onload = () => {
  startRecording();
};
