import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanvasGame } from '../model/canvas-grid';
import { DrawGridService } from '../service/grid/draw-grid.service';
import { MoveService } from '../service/action/move.service';

@Component({
  selector: 'app-canvas-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './canvas-content.component.html',
  styleUrl: './canvas-content.component.scss'
})
export class CanvasContentComponent implements OnInit {
  @ViewChild('gridCanvas', { static: true }) gridCanvas!: ElementRef<HTMLCanvasElement>;

  game: CanvasGame = this.drawGridService.initCanvasGame();

  private ctx!: CanvasRenderingContext2D;
  private uploadedImage: HTMLImageElement | null = null;

  constructor(private drawGridService: DrawGridService, private moveService: MoveService) {

  }

  ngOnInit(): void {
    this.initializeCanvas();
    this.drawGrid();

    window.addEventListener('resize', () => {
      this.initializeCanvas();
      this.drawGrid();
    });

    document.addEventListener('keydown', (event) => this.movePlayer(event));
  }

  initializeCanvas(): void {
    const canvas = this.gridCanvas.nativeElement;
    this.ctx = canvas.getContext('2d')!;


    const availableWidth = window.innerWidth * 0.8;
    const availableHeight = window.innerHeight * 0.8;

    this.game.gridContent.tileSize = Math.min(
      Math.floor(availableWidth / this.game.gridContent.visibleWidth),
      Math.floor(availableHeight / this.game.gridContent.visibleHeight)
    );

    canvas.width = this.game.gridContent.tileSize * this.game.gridContent.visibleWidth;
    canvas.height = this.game.gridContent.tileSize * this.game.gridContent.visibleHeight;

    this.game.player.image.src = '/assets/figure/figure.png'; // Path to player image
  }

  drawGrid(): void {
    this.ctx.clearRect(0, 0, this.gridCanvas.nativeElement.width, this.gridCanvas.nativeElement.height);

    for (let y = 0; y < this.game.gridContent.visibleHeight; y++) {
      for (let x = 0; x < this.game.gridContent.visibleWidth; x++) {
        const gridX = this.game.gridContent.visibleStartX + x;
        const gridY = this.game.gridContent.visibleStartY + y;

        this.ctx.fillStyle = (gridX + gridY) % 2 === 0 ? '#ffffff' : '#000000';
        this.ctx.fillRect(x * this.game.gridContent.tileSize, y * this.game.gridContent.tileSize, this.game.gridContent.tileSize, this.game.gridContent.tileSize);

        this.ctx.strokeStyle = '#ccc';
        this.ctx.strokeRect(x * this.game.gridContent.tileSize, y * this.game.gridContent.tileSize, this.game.gridContent.tileSize, this.game.gridContent.tileSize);

        if (gridX === this.game.player.playerX && gridY === this.game.player.playerY) {
          this.ctx.drawImage(this.game.player.image, x * this.game.gridContent.tileSize, y * this.game.gridContent.tileSize, this.game.gridContent.tileSize, this.game.gridContent.tileSize);
        }

        if (this.uploadedImage && gridX === this.game.player.playerX && gridY === this.game.player.playerY) {
          this.ctx.drawImage(this.uploadedImage, x * this.game.gridContent.tileSize, y * this.game.gridContent.tileSize, this.game.gridContent.tileSize, this.game.gridContent.tileSize);
        }
      }
    }
  }

  movePlayer(event: KeyboardEvent): void {
    this.game = this.moveService.movePlayerWithKeyEvent(event, this.game);

    if (this.game.moved) {
      this.drawGrid();
    }
  }

  onImageUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        this.uploadedImage = img;
        this.drawGrid();
      };
      img.src = URL.createObjectURL(file);
    }
  }

  generateGrid(): void {
    this.initializeCanvas();
    this.drawGrid();
  }

  move(direction: string): void {
    this.game = this.moveService.movedPlayer(direction, this.game);
    if (this.game.moved) {
      this.drawGrid();
    }
  }

}
