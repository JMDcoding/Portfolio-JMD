document.addEventListener("DOMContentLoaded", () => {
  const macWrapper = document.getElementById("mac-wrapper");
  const macScreen = document.getElementById("mac-screen");
  const welcomeHeader = document.querySelector(".welcome-header");
  
  // Screen States
  const stateOff = document.getElementById("state-off");
  const stateBooting = document.getElementById("state-booting");
  const stateOn = document.getElementById("state-on");
  
  // Progress Bar
  const bootProgress = document.getElementById("boot-progress");
  
  // Actions
  const btnZoomOut = document.getElementById("btn-zoom-out");
  const btnShutdown = document.getElementById("btn-shutdown");
  
  // Windows & Tiles
  const tiles = document.querySelectorAll(".mosaic-tile");
  const windows = document.querySelectorAll(".mac-window");
  const closeButtons = document.querySelectorAll(".mac-close-btn");
  
  let isBooted = false;
  let isZoomed = false;

  // Clock Update
  const menuClock = document.getElementById("menu-clock");
  const updateClock = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    if (menuClock) menuClock.textContent = `${hours}:${minutes}`;
  };
  setInterval(updateClock, 1000);
  updateClock();

  // Web Audio Retro Boot Chime (Generates a clean synth chord beep)
  const playBootChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const playTone = (freq, delay, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        
        gain.gain.setValueAtTime(0, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + delay + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
      };
      
      // Play a retro major chord (C5, E5, G5, C6) with arpeggio effect
      playTone(523.25, 0.0, 1.2); // C5
      playTone(659.25, 0.08, 1.2); // E5
      playTone(783.99, 0.16, 1.2); // G5
      playTone(1046.50, 0.24, 1.5); // C6
    } catch (e) {
      console.log("Audio not supported or blocked by browser policy.");
    }
  };

  // Click on screen or Mac chassis to Boot & Zoom in
  macWrapper.addEventListener("click", (e) => {
    // If user clicks a button or interactive element, ignore default boot zoom
    if (e.target.closest(".mosaic-tile") || e.target.closest(".mac-window") || e.target.closest(".mac-menu-bar")) {
      return;
    }

    if (!isZoomed) {
      zoomIn();
      if (!isBooted) {
        bootSequence();
      }
    }
  });

  const zoomIn = () => {
    macWrapper.classList.add("zoomed");
    welcomeHeader.classList.add("hidden");
    isZoomed = true;
  };

  const zoomOut = () => {
    macWrapper.classList.remove("zoomed");
    welcomeHeader.classList.remove("hidden");
    isZoomed = false;
  };

  const bootSequence = () => {
    isBooted = true;
    playBootChime();
    
    // Switch to booting state
    stateOff.classList.add("hidden");
    stateBooting.classList.remove("hidden");
    
    // Animate progress bar
    let progress = 0;
    bootProgress.style.width = "0%";
    
    const interval = setInterval(() => {
      progress += 4;
      if (bootProgress) bootProgress.style.width = `${progress}%`;
      
      if (progress >= 100) {
        clearInterval(interval);
        // Completed booting, show OS Desktop
        setTimeout(() => {
          stateBooting.classList.add("hidden");
          stateOn.classList.remove("hidden");
        }, 300);
      }
    }, 80);
  };

  // Reculer (Zoom out) Action
  if (btnZoomOut) {
    btnZoomOut.addEventListener("click", (e) => {
      e.stopPropagation();
      zoomOut();
    });
  }

  // Shutdown Action
  if (btnShutdown) {
    btnShutdown.addEventListener("click", (e) => {
      e.stopPropagation();
      zoomOut();
      setTimeout(() => {
        // Power off CRT screen
        stateOn.classList.add("hidden");
        stateOff.classList.remove("hidden");
        // Close all windows
        windows.forEach(win => win.classList.add("hidden"));
        isBooted = false;
      }, 600);
    });
  }

  // Windows Management
  tiles.forEach(tile => {
    tile.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = tile.getAttribute("data-target");
      if (targetId) {
        // Close all windows first to save space on small screen
        windows.forEach(win => win.classList.add("hidden"));
        
        const targetWindow = document.getElementById(targetId);
        if (targetWindow) {
          targetWindow.classList.remove("hidden");
        }
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute("data-close");
      if (targetId) {
        const targetWindow = document.getElementById(targetId);
        if (targetWindow) {
          targetWindow.classList.add("hidden");
        }
      }
    });
  });

  // Projects category filter logic inside window
  const filterBtns = document.querySelectorAll(".win-filter-btn");
  const repoItems = document.querySelectorAll(".win-repo-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      repoItems.forEach(item => {
        const cat = item.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });
});
