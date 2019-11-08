let Header = () => {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Block Web Dev</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </nav>
}
let Article = () => {
    return <div id="articleContainer">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo. Tellus at urna condimentum mattis pellentesque id nibh. Non consectetur a erat nam at lectus urna. Dui vivamus arcu felis bibendum ut tristique. Risus in hendrerit gravida rutrum quisque non tellus orci. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Amet luctus venenatis lectus magna fringilla urna. Dictum non consectetur a erat nam at lectus. Neque laoreet suspendisse interdum consectetur libero. Faucibus turpis in eu mi bibendum neque egestas congue. Ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nisl purus in mollis. Sed viverra tellus in hac habitasse. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Erat pellentesque adipiscing commodo elit. Id velit ut tortor pretium viverra suspendisse potenti nullam. Eu tincidunt tortor aliquam nulla facilisi. Etiam erat velit scelerisque in dictum.
        </p>
        <b/>
        <p>
            Nec dui nunc mattis enim ut. Sit amet venenatis urna cursus. Egestas pretium aenean pharetra magna ac. Morbi blandit cursus risus at ultrices mi. Volutpat blandit aliquam etiam erat. Id donec ultrices tincidunt arcu non sodales. Sed adipiscing diam donec adipiscing tristique risus. Ipsum a arcu cursus vitae congue mauris rhoncus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Id diam vel quam elementum pulvinar. Etiam tempor orci eu lobortis elementum. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Fermentum iaculis eu non diam phasellus vestibulum. Bibendum neque egestas congue quisque egestas. Lacus suspendisse faucibus interdum posuere. Ultricies mi quis hendrerit dolor magna eget. Porttitor lacus luctus accumsan tortor.
        </p>
        <b/>
        <p>
            Amet mattis vulputate enim nulla aliquet porttitor. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Leo vel orci porta non pulvinar neque. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Vitae aliquet nec ullamcorper sit amet. Vitae elementum curabitur vitae nunc. Faucibus vitae aliquet nec ullamcorper. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Eu facilisis sed odio morbi quis. Gravida neque convallis a cras semper auctor neque vitae tempus. Fermentum leo vel orci porta. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Netus et malesuada fames ac turpis egestas. Quis auctor elit sed vulputate mi sit amet. Facilisis magna etiam tempor orci eu. Mauris pharetra et ultrices neque ornare aenean euismod. Semper viverra nam libero justo laoreet. Erat imperdiet sed euismod nisi. Integer enim neque volutpat ac tincidunt.
        </p>
    </div>
}
let Footer = () => {
    return <footer>
        <div>
            This is the footer of my page.
        </div>
    </footer>
}

let Blog = () => {
    return <span>
        <Header/>
        <Article/>
        <Footer/>
    </span>
}


ReactDOM.render(<Blog/>, document.getElementById('root'))