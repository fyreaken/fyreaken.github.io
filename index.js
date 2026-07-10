// Select all elements with id "FROSTsection"
function FROSTfunction(){
    const frostSections = document.querySelectorAll('#FROSTsection');
    // Access the second one (index starts at 0)
    const secondFrostSection = frostSections[1];
    // Example: toggle display
    if (secondFrostSection.style.display === 'none') {
    secondFrostSection.style.display = 'block';
    } else {
    secondFrostSection.style.display = 'none';
    }
}

function INSTALLfunction() {
    const installSections = document.querySelectorAll('#INSTALLsection');
    const secondInstallSection = installSections[1];
    if (secondInstallSection.style.display === "none") {
        secondInstallSection.style.display = "block";
    } else {
        secondInstallSection.style.display = "none";
    }
}

function DLfunction() {
    const dlSections = document.querySelectorAll('#DLsection');
    const seconddlSections = dlSections[1];
    if (seconddlSections.style.display === "none") {
        seconddlSections.style.display = "block";
    } else {
        seconddlSections.style.display = "none";
    }
}

function CAMOfunction(){
    const camoSections = document.querySelectorAll('#CAMOsection');
    // Access the second one (index starts at 0)
    const secondCamoSection = camoSections[1];
    // Example: toggle display
    if (secondCamoSection.style.display === 'none') {
    secondCamoSection.style.display = 'block';
    } else {
    secondCamoSection.style.display = 'none';
    }
}

function CAMODLfunction(){
    const camoDLSections = document.querySelectorAll('#CAMODLsection');
    // Access the second one (index starts at 0)
    const secondCamoDLSection = camoDLSections[1];
    // Example: toggle display
    if (secondCamoDLSection.style.display === 'none') {
    secondCamoDLSection.style.display = 'block';
    } else {
    secondCamoDLSection.style.display = 'none';
    }
}


function STREETGAMEfunction(){
    const STREETGAMESections = document.querySelectorAll('#STREETGAMEsection');
    // Access the second one (index starts at 0)
    const secondSTREETGAMESection = STREETGAMESections[1];
    // Example: toggle display
    if (secondSTREETGAMESection.style.display === 'none') {
    secondSTREETGAMESection.style.display = 'block';
    } else {
    secondSTREETGAMESection.style.display = 'none';
    }
}

function DAYTOENDfunction(){
    const DAYTOENDSections = document.querySelectorAll('#DAYTOENDsection');
    // Access the second one (index starts at 0)
    const secondDAYTOENDSection = DAYTOENDSections[1];
    // Example: toggle display
    if (secondDAYTOENDSection.style.display === 'none') {
    secondDAYTOENDSection.style.display = 'block';
    } else {
    secondDAYTOENDSection.style.display = 'none';
    }
}

function CONTINGENTfunction(){
    const CONTINGENTSections = document.querySelectorAll('#CONTINGENTsection');
    // Access the second one (index starts at 0)
    const secondCONTINGENTSection = CONTINGENTSections[1];
    // Example: toggle display
    if (secondCONTINGENTSection.style.display === 'none') {
    secondCONTINGENTSection.style.display = 'block';
    } else {
    secondCONTINGENTSection.style.display = 'none';
    }
}

function LEGOUNIVERSEfunction(){
    const LEGOUNIVERSESections = document.querySelectorAll('#LEGOUNIVERSE');
    // Access the second one (index starts at 0)
    const secondLEGOUNIVERSESection = LEGOUNIVERSESections[1];
    // Example: toggle display
    if (secondLEGOUNIVERSESection.style.display === 'none') {
    secondLEGOUNIVERSESection.style.display = 'block';
    } else {
    secondLEGOUNIVERSESection.style.display = 'none';
    }
}

function FALLOUT76function(){
    const FALLOUT76Sections = document.querySelectorAll('#FALLOUT76');
    // Access the second one (index starts at 0)
    const secondFALLOUT76Section = FALLOUT76Sections[1];
    // Example: toggle display
    if (secondFALLOUT76Section.style.display === 'none') {
    secondFALLOUT76Section.style.display = 'block';
    } else {
    secondFALLOUT76Section.style.display = 'none';
    }
}


// BD.HTML JAVASCRIPT
// BD.HTML JAVASCRIPT
/*function discdd() {
    document.getElementById("discDropDown").classList.toggle("show");
}

function icondd() {
    document.getElementById("iconDropDown").classList.toggle("show");
}

function standardText() {
    var standard = document.getElementById("standard");
    var goldhen = document.getElementById("goldhen");
    if (standard.style.display === "none") {
        standard.style.display = "block";
        goldhen.style.display = "none";
    } else {
        standard.style.display = "none";
    }
}
function goldhenText() {
    var standard = document.getElementById("standard");
    var goldhen = document.getElementById("goldhen");
    if (goldhen.style.display === "none") {
        goldhen.style.display = "block";
        standard.style.display = "none";
    } else {
        goldhen.style.display = "none";
    }
}

function icon1Text() {
    var icon1 = document.getElementById("icon1");
    var icon2 = document.getElementById("icon2");
    var iconnone = document.getElementById("iconnone");
    if (icon1.style.display === "none") {
        icon1.style.display = "block";
        icon2.style.display = "none";
        iconnone.style.display = "none";
    } else {
        icon1.style.display = "none";
    }
}
function icon2Text() {
    var icon1 = document.getElementById("icon1");
    var icon2 = document.getElementById("icon2");
    var iconnone = document.getElementById("iconnone");
    if (icon2.style.display === "none") {
        icon2.style.display = "block";
        icon1.style.display = "none";
        iconnone.style.display = "none";
    } else {
        icon2.style.display = "none";
    }
}
function iconnoneText() {
    var icon1 = document.getElementById("icon1");
    var icon2 = document.getElementById("icon2");
    var iconnone = document.getElementById("iconnone");
    if (iconnone.style.display === "none") {
        iconnone.style.display = "block";
        icon1.style.display = "none";
        icon2.style.display = "none";
    } else {
        iconnone.style.display = "none";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/
// BD.HTML JAVASCRIPT
// BD.HTML JAVASCRIPT


//this works with a cube that has its content marked out
//reloads page when first cube is clicked
//due to first cube not being used yet
/*const observer = new MutationObserver(() => {
    const img = document.querySelector('#iconRow img');
    if (img) {
      img.addEventListener('click', () => {
        location.reload();
      });
      observer.disconnect(); // Stop observing once found
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true }); */



  
/*
  function loadUrl(newLocation)
  {
    window.location = newLocation;
  }

//this works with a cube that has its content marked out
//reloads page when first cube is clicked
//due to first cube not being used yet
const observer = new MutationObserver(() => {
    const img = document.querySelector('#iconRow img');
    if (img) {
      img.addEventListener('click', () => {
        //location.reload();
        loadUrl('https://www.etsy.com/uk/shop/fyreakenspace');
      });
      observer.disconnect(); // Stop observing once found
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true }); */