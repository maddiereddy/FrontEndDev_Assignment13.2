import { Component } from '@angular/core';

@Component({
    selector: 'my-home',
    template: `
        <div>
            <h2 style="color:blue">Home Component Page</h2>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" required>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>`
})
export class HomeComponent {

    canDeactivate() {
        return confirm(`Your data hasn’t been saved.\nAre you sure you want to leave this page`)
    }
}