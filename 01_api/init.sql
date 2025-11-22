DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    year INT,
    genre VARCHAR(100),
    poster VARCHAR(500),
    summary TEXT
);

INSERT INTO movies (title, year, genre, poster, summary) VALUES
("The Shawshank Redemption", 1994, "Drama", "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", "Two imprisoned men bond over..."),

("The Godfather", 1972, "Crime", "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", "The aging patriarch of an organized crime dynasty..."),

("The Dark Knight", 2008, "Action", "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", "When the menace known as the Joker wreaks havoc..."),

("Pulp Fiction", 1994, "Crime", "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", "The lives of two mob hitmen, a boxer..."),

("Forrest Gump", 1994, "Drama", "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", "The presidencies of Kennedy and Johnson..."),

("Inception", 2010, "Sci-Fi", "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg", "A thief who steals corporate secrets using dream-sharing..."),

("Interstellar", 2014, "Sci-Fi", "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", "A team of explorers travel through a wormhole in space..."),

("Parasite", 2019, "Thriller", "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", "Greed and class discrimination threaten a symbiotic relationship...");
