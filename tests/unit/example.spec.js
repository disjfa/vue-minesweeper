import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import VueMinesweeper from '@/index';
import MinesweeperGame from '@/components/MinesweeperGame.vue';

describe('VueMinesweeper plugin', () => {
  it('registers MinesweeperGame as a global component', () => {
    const wrapper = shallowMount(
      {
        template: '<minesweeper-game />',
      },
      {
        global: {
          plugins: [VueMinesweeper],
        },
      },
    );

    expect(wrapper.findComponent(MinesweeperGame).exists()).toBe(true);
  });
});
