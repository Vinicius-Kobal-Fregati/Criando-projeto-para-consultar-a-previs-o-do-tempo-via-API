import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { CityWeather } from '../../../../shared/models/weather.model';
import { Units } from 'src/app/shared/models/units.enum';

@Component({
  selector: 'jv-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //O on push atualiza sempre quando nosso input muda, o que é melhor que o padrão que ocorre a cada clock
})
export class CurrentWeatherComponent {

  @Input() cityWeather: CityWeather;
  @Input() isFavorite: boolean;
  @Input() unit: Units;
  @Output() toggleBookmark = new EventEmitter();

  get cityName(): string {
    return `${this.cityWeather.city.name}, ${this.cityWeather.city.country}`; 
  }

  onToggleBookmark() {
    this.toggleBookmark.emit();
  }
}
