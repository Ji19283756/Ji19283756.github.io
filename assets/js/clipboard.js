function copyToClipboard() {
    var text_to_copy = "Thatoneasianguy#1894";
    
    navigator.clipboard.writeText(text_to_copy);

    alert("Copied the text: " + text_to_copy);
} 