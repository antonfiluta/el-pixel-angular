import { Pipe, PipeTransform } from '@angular/core';

type Regions = 'BY' | 'RU' | 'PL';

const formats: Record<Regions, string> = {
  BY: '+375 (XX) XXX-XX-XX',
  RU: '+7 (XXX) XXX-XX-XX',
  PL: '+48 XXX-XXX-XXX',
};

@Pipe({
  name: 'formatPhone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  public transform(value: string, region: Regions): string {
    let phone = formats[region];

    for (const symbol of value) {
      if (symbol >= '0' && symbol <= '9') {
        phone = phone.replace('X', symbol);
      }
    }

    return phone.includes('X') ? 'Wrong Input' : phone;
  }
}
