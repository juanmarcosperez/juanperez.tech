import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="projectcards">
      <div class="item-1">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Pokemon Search</span>
                <p>
                  App used to seach for all pokemon. Displays basic stat
                  information from current region.
                </p>
              </div>
              <div class="card-action">
                <a href="home">Code</a>
                <a href="about">Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-2">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Today's News</span>
                <p>Displays news from different media outlets.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-3">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">NFL Arrest Records</span>
                <p>
                  App used to search for arrest records from any NFL player.
                  displays type of arrest, date, etc...
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-4">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Tic-Tac-Toe</span>
                <p>Basic Tic-Tac-Toe game. Have Fun!</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-5">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Movie Search</span>
                <p>
                  Movie Database, Can search for any movie and will receive
                  plot, date released box office earnings. Also displays tv for
                  the day.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-6">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Futbol League Report</span>
                <p>Displays all stats for Futbol teams</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-7">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Mountain Bike Trail Finder</span>
                <p>
                  App displays trails near the Austin area (park address, trail
                  map if available, trail length). Also displays status from
                  twitter pages of trails if available.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-8">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Crypto Traker(React Native)</span>
                <p>Crypto currency tracker. Only for react native.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-9">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Weather</span>
                <p>
                  Basic weather app that display the last 5 cities seached for.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> // end classname projectcards
  );
};

export default ProjectCard;
