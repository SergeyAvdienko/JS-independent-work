export class Download {
  downloadFile(link) {
    if (process.env.NODE_ENV === 'development') {
      link = `http://localhost:4200${link}`;
    } else {
      link = `https://www.yourhabit.ru${link}`;
    }
    const linkUrl = document.createElement('a');
    linkUrl.download = link.substring((link.lastIndexOf('/') + 1), link.length);
    linkUrl.href = link;
    document.body.appendChild(linkUrl);
    linkUrl.click();
    document.body.removeChild(linkUrl);
    return;
  }
}
