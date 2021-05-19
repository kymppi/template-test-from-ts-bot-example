import { expect } from 'chai';
import { PingFinder } from '../../src/services/ping-finder';

describe('PingFinder', () => {
  let service: PingFinder;
  beforeEach(() => {
    service = new PingFinder();
  });

  it('should find "ping" in the string', () => {
    expect(service.isPing('some message with ping')).to.be.true;
  });

  it('should not find "ping" in the string', () => {
    expect(service.isPing('some message')).to.be.false;
  });
});
