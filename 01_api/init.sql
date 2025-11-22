CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `year` int NOT NULL,
  `genre` varchar(100) NOT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `summary` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `movies` (id, title, year, genre, poster, summary) VALUES
(1,'The Shawshank Redemption',1994,'Drama','https://www.example.com/posters/1.jpg','Two imprisoned men bond over...'),
(2,'The Godfather',1972,'Crime','https://www.example.com/posters/2.jpg','The aging patriarch of an organized crime dynasty...'),
(3,'The Dark Knight',2008,'Action','https://www.example.com/posters/3.jpg','When the menace known as the Joker wreaks havoc...'),
(4,'Pulp Fiction',1994,'Crime','https://www.example.com/posters/4.jpg','The lives of two mob hitmen, a boxer...'),
(5,'Forrest Gump',1994,'Drama','https://www.example.com/posters/5.jpg','The presidencies of Kennedy and Johnson...'),
(6,'Inception',2010,'Sci-Fi','https://www.example.com/posters/6.jpg','A thief who steals corporate secrets through use of dream-sharing technology...'),
(7,'Interstellar',2014,'Sci-Fi','https://www.example.com/posters/7.jpg','A team of explorers travel through a wormhole in space...'),
(8,'Parasite',2019,'Thriller','https://www.example.com/posters/8.jpg','Greed and class discrimination threaten the newly formed symbiotic relationship...');
ALTER TABLE `movies` ADD PRIMARY KEY (`id`);
ALTER TABLE `movies` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
