(this["webpackJsonpstudy-react"]=this["webpackJsonpstudy-react"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),i=a.n(l),r=(a(13),a(7)),s=a(1),o=a(2),m=a(3),u=a(4),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).state={willWatch:e.willWatch},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,l=t.addMovieToWillWatch,i=t.removeMovieFromWillWatch;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500/".concat(a.backdrop_path||a.poster_path),alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),this.state.willWatch?c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),i(a)}},"Remove Will Watch"):c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),l(a)}},"Add Will Watch")),c.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:function(){i(a),n(a)}},"Delete movie")))}}]),a}(c.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){return e!==t?a(e):function(){}}},l=function(e){return console.log("change!"),"nav-link ".concat(t===e?"active":"")};return console.log("MovieTabs render!"),c.a.createElement("ul",{className:"tabs nav nav-tabs"},c.a.createElement("li",null,c.a.createElement("div",{className:"nav-item"},c.a.createElement("div",{className:l("popularity.desc"),onClick:n("popularity.desc")},"Popularity desc"))),c.a.createElement("li",null,c.a.createElement("div",{className:"nav-item"},c.a.createElement("div",{className:l("revenue.desc"),onClick:n("revenue.desc")},"Revenue desc"))),c.a.createElement("li",null,c.a.createElement("div",{className:"nav-item"},c.a.createElement("div",{className:l("vote_average.desc"),onClick:n("vote_average.desc")},"Vote average desc"))))}}]),a}(c.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentPage,a=e.updateCurrPage,n=e.totalPages,l=function(e){return"nav-link ".concat(e>1?"active":"disabled")},i=function(e){return"nav-link ".concat(e<500?"active":"disabled")},r=function(e){return function(){a(e)}};return c.a.createElement("ul",{className:"nav nav-pills"},c.a.createElement("li",null,c.a.createElement("div",{className:"nav-item"},c.a.createElement("div",{className:l(t),onClick:r(1)},"First"))),c.a.createElement("li",null,c.a.createElement("div",{className:"nav-item"},c.a.createElement("div",{className:l(t),onClick:r(t-1)},"Prev"))),c.a.createElement("li",null,c.a.createElement("div",{className:"nav-item"},c.a.createElement("div",{className:"nav-link disabled"},"Page ","".concat(t,"/").concat(n)))),c.a.createElement("li",null,c.a.createElement("div",{className:"nav-item"},c.a.createElement("div",{className:i(t),onClick:function(){a(t+1)}},"Next"))),c.a.createElement("li",null,c.a.createElement("div",{className:"nav-item"},c.a.createElement("div",{className:i(t),onClick:r(n)},"Last"))))}}]),a}(c.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movieTitle,a=e.movieRating;return c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,t),c.a.createElement("div",null,a))}}]),a}(c.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(r.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.setState({sort_by:t,page:a})},e.updateCurrPage=function(t){e.setState({page:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",page:1,totalPages:500},console.log("APP constuctor"),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("App didMount"),this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){console.log("App didUpdate"),t.sort_by===this.state.sort_by&&t.page===this.state.page||(console.log("Call API"),this.getMovies())}},{key:"getMovies",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("10583ae2a082debca788c1b540672590","&sort_by=").concat(this.state.sort_by,"&page=").concat(this.state.page)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(d,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy,updateCurrPage:this.updateCurrPage}))),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(p,{currentPage:this.state.page,updateCurrPage:this.updateCurrPage,totalPages:this.state.totalPages}))),c.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return c.a.createElement("div",{className:"col-6 mb-4",key:t.id},c.a.createElement(v,{key:t.id,willWatch:e.state.moviesWillWatch.find((function(e){return e.id===t.id})),movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("p",null,"Will watch: ",this.state.moviesWillWatch.length),c.a.createElement("ul",{className:"list-group"},this.state.moviesWillWatch.map((function(e){return c.a.createElement("li",{className:"list-group-item",key:e.id},c.a.createElement(h,{key:e.id,movieTitle:e.title,movieRating:e.vote_average}))}))))))}}]),a}(c.a.Component);a(14);i.a.render(c.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8ce7b98d.chunk.js.map