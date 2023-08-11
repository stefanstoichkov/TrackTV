import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/Cast';
import { Movie } from '../../interfaces/movie';
import { MovieService } from './movie.service';
import { CastService } from '../cast.service';
import { CommentsService } from '../comments.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
    movie: Movie | undefined;
    favoriteCast: Cast | undefined;
    castings: Cast[] = [];
    topCastings: Cast[] = [];

    constructor(
        private movieService: MovieService,
        private castService: CastService,
        private commentsService: CommentsService
    ) {}

    ngOnInit() {
        this.movieService.getMovieById(1).subscribe((movie) => {
            this.movie = movie;
            this.castService.getCastOfMovie(movie.data.id);
            this.castService.getFavoriteCastOfMovie(movie.data.id);
            this.commentsService.getRatingsOfMovie(movie.data.id);
        });

        this.castService.favoriteCast.subscribe(
            (favCast) => (this.favoriteCast = favCast)
        );

        this.castService
            .getTopCastOfMovie(1)
            .subscribe((top) => (this.topCastings = top));
    }

    onVoteFavorite(castId: Number) {
        if (this.movie) {
            this.castService.voteForFavoriteCastOfMovie(1, castId);
        }
    }

    onNewComment(text: String) {
        if (this.movie) {
            this.commentsService.addRatingToMovie(1, 10, text);
        }
    }

    onAddToWatchedMovies() {
        if (this.movie) {
            this.movieService.markMovieAsWatched(1);
            this.movie.watched = true;
        }
    }
}