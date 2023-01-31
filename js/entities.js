class Movie {
  constructor(name, duration, genre) {
    this.name = name;
    this.duration = duration;
    this.genre = genre;
  }
  getData() {
    return `*${this.name} lasts for ${this.duration} minutes, ${this.genre[0].toUpperCase()}${this.genre[this.genre.length - 1].toUpperCase()}.`;
  }
}