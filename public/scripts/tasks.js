$(document).ready(function () {

const $taskContainer = `
<section class="py-5 text-center container section">
<div class="row">
  <div class="col-md-6">
    <div class="input-group mb-3">
      <div class="input-row">
        <input
          type="text"
          class="form-control"
          placeholder="Enter the task to do..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          style="
            background-color: #eef4ed;
            color: #0b2545;
            height: 100px;
            width: 20rem;
          "
        />
      </div>
      <div class="input-row">
        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon1"
          style="
            background-color: #13315c;
            color: white;
            margin-top: 10px;
          "
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div
      class="section"
      style="
        background-color: #eef4ed;
        padding: 20px;
        border-radius: 5px;
      "
    >
      <h2 style="color: #134074">Login</h2>
      <form style="margin-bottom: 20px">
        <label
          for="username"
          style="display: block; margin-bottom: 5px; color: #13315c"
          >Username:</label
        >
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          style="
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #0b2545;
            border-radius: 4px;
          "
          required
        />
        <label
          for="password"
          style="display: block; margin-bottom: 5px; color: #13315c"
          >Password:</label
        >
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          style="
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #0b2545;
            border-radius: 4px;
          "
          required
        />
        <button
          type="submit"
          style="
            padding: 10px 20px;
            background-color: #134074;
            color: #eef4ed;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Login
        </button>
      </form>
    </div>
  </div>
</div>
</section>

<!--<div class="logout" style="background-color: #8da9c4; padding: 20px;">
  <h2 style="color: #13315c;">Logout</h2>
  <p style="color: #13315c;">Welcome, [username]</p>
  <button type="button" style="padding: 10px 20px; background-color: #13315c; color: #eef4ed; border: none; border-radius: 4px; cursor: pointer;">Logout</button>
</div>-->

<!--style="background-image: url('/public/images/movies.jpg')"-->

<div
class="album py-5 bg-body-tertiary"
style="background-color: #eef4ed"
>
<div class="container">
  <div
    class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 align-items-center justify-content-center"
  >
    <!-- First Row: Movies, Books, Products, Restaurants -->
    <div class="col">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#134074" />
          <text
            x="50%"
            y="10%"
            fill="#eceeef"
            dy=".3em"
            font-size="2rem"
          >
            Movies
          </text>

          <foreignObject
            x="10%"
            y="20%"
            width="80%"
            height="80%"
            style="border-top: 1px solid #eef4ed"
          >
            <ul class="card-item-list" style="color: #eef4ed">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </foreignObject>
        </svg>
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="background-color: #13315c; color: white"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#134074" />
          <text
            x="50%"
            y="10%"
            fill="#eceeef"
            dy=".3em"
            font-size="2rem"
          >
            Books
          </text>
          <foreignObject
            x="10%"
            y="20%"
            width="80%"
            height="80%"
            style="border-top: 1px solid #eef4ed"
          >
            <ul class="card-item-list" style="color: #eef4ed">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </foreignObject>
        </svg>
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="background-color: #13315c; color: white"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#134074" />
          <text
            x="50%"
            y="10%"
            fill="#eceeef"
            dy=".3em"
            font-size="2rem"
          >
            Products
          </text>
          <foreignObject
            x="10%"
            y="20%"
            width="80%"
            height="80%"
            style="border-top: 1px solid #eef4ed"
          >
            <ul class="card-item-list" style="color: #eef4ed">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </foreignObject>
        </svg>
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="background-color: #13315c; color: white"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#134074" />
          <text
            x="50%"
            y="10%"
            fill="#eceeef"
            dy=".3em"
            font-size="2rem"
          >
            Restaurants
          </text>
          <foreignObject
            x="10%"
            y="20%"
            width="80%"
            height="80%"
            style="border-top: 1px solid #eef4ed"
          >
            <ul class="card-item-list" style="color: #eef4ed">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </foreignObject>
        </svg>
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="background-color: #13315c; color: white"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Row: Unlisted and Others -->
    <div class="col">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#134074" />
          <text
            x="50%"
            y="10%"
            fill="#eceeef"
            dy=".3em"
            font-size="2rem"
          >
            Unlisted
          </text>
          <foreignObject
            x="10%"
            y="20%"
            width="80%"
            height="80%"
            style="border-top: 1px solid #eef4ed"
          >
            <ul class="card-item-list" style="color: #eef4ed">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </foreignObject>
        </svg>
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="background-color: #13315c; color: white"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#134074" />
          <text
            x="50%"
            y="10%"
            fill="#eceeef"
            dy=".3em"
            font-size="2rem"
          >
            Others
          </text>
          <foreignObject
            x="10%"
            y="20%"
            width="80%"
            height="80%"
            style="border-top: 1px solid #eef4ed"
          >
            <ul class="card-item-list" style="color: #eef4ed">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </foreignObject>
        </svg>
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="background-color: #13315c; color: white"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`


})
