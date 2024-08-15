let tooltip = null;

document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    chrome.runtime.sendMessage({action: "getFacultyRatings", selectedText: selectedText}, (response) => {
      if (response.matches.length > 0) {
        showRatingsTooltip(response.matches);
      } else {
        hideTooltip();
      }
    });
  } else {
    hideTooltip();
  }
});
function showRatingsTooltip(matches) {
  hideTooltip();
  
  tooltip = document.createElement('div');
  tooltip.className = 'faculty-ratings-tooltip';
  
  const content = matches.map(faculty => {
    const overallClass = faculty.Overall.toLowerCase() === 'good' ? 'overall-good' : 
                         faculty.Overall.toLowerCase() === 'bad' ? 'overall-bad' : 'overall-medium';
    
    return `
      <div class="faculty-rating">
        <h3>${faculty.Name}</h3>
        <p><span class="rating-label">Teaching:</span> <span class="rating-value">${faculty.Teaching}</span></p>
        <p><span class="rating-label">Evaluation:</span> <span class="rating-value">${faculty.Evaluation}</span></p>
        <p><span class="rating-label">Behaviour:</span> <span class="rating-value">${faculty.Behaviour}</span></p>
        <p><span class="rating-label">Internals:</span> <span class="rating-value">${faculty.Internals}</span></p>
        <p><span class="rating-label">Average:</span> <span class="rating-value">${faculty.Average}</span></p>
        <p><span class="rating-label">Overall:</span> <span class="rating-value ${overallClass}">${faculty.Overall}</span></p>
      </div>
    `;
  }).join('');
  
  tooltip.innerHTML = content;
  document.body.appendChild(tooltip);
  
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  
  tooltip.style.left = `${rect.left + window.scrollX}px`;
  tooltip.style.top = `${rect.bottom + window.scrollY}px`;
}
function hideTooltip() {
  if (tooltip) {
    tooltip.remove();
    tooltip = null;
  }
}

document.addEventListener('scroll', hideTooltip);