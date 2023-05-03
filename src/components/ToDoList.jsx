import React, { Component } from 'react'

export default class ToDoList extends Component {
    render() {
        return (
            <div style={{ display:'flex', justifyContent: 'center' }}>
                <div style={{ maxWidth: '500px' }}>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                            <label class="form-check-label" for="firstCheckbox">First checkbox</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                            <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                            <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}
