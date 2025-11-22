CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `year` int NOT NULL,
  `genre` varchar(100) NOT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `summary` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO movies (title, year, genre, summary, poster) VALUES
('The Shawshank Redemption', 1994, 'Drama',
 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.',
 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg'),

('The Godfather', 1972, 'Crime',
 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
 'https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg'),

('The Dark Knight', 2008, 'Action',
 'Batman battles the Joker in a chaotic struggle for Gotham City.',
 'https://m.media-amazon.com/images/I/51EbJjlxF-L._AC_.jpg'),

('Pulp Fiction', 1994, 'Crime',
 'The lives of two mob hitmen intertwine in shocking and comedic ways.',
 'https://m.media-amazon.com/images/I/51U1Vf7pGxL._AC_.jpg'),

('Forrest Gump', 1994, 'Drama',
 'A simple man witnesses historic events while chasing his love for Jenny.',
 'https://m.media-amazon.com/images/I/41cR4QK77JL._AC_.jpg'),

('Inception', 2010, 'Sci-Fi',
 'A thief who enters dreams must perform inception—a dangerous and complex mission.',
 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg'),

('Interstellar', 2014, 'Sci-Fi',
 'A team travels through a wormhole to secure a future for humanity.',
 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1178_.jpg'),

('Parasite', 2019, 'Thriller',
 'Two families become entangled in a dark social satire of class conflict.',
 'https://m.media-amazon.com/images/I/81A7o5o9HLL._AC_SL1500_.jpg');

ALTER TABLE `movies` ADD PRIMARY KEY (`id`);
ALTER TABLE `movies` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
